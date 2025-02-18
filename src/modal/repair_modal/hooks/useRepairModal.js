'use client'

import { useEffect, useRef, useState } from "react"
import Store from "@/utils/Store"
import Api from "@/utils/Api"

export default function useRepairModal (services) {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [policy, setPolicy] = useState(false)
    const [price, setPrice] = useState(0)
    const [input, setInput] = useState({
        name: '',
        service_name: '',
        phone: '',
    })
    const [error, setError] = useState({
        name: false,
        phone: false,
        policy: false,
    })
    const timer = useRef(null)
    const modal = useRef(null)

    Store.useListener('open_repair_modal', (data) => {
        setIsOpen(true)
        if(data) {
            setInput(prev => ({...prev, service_name: data?.title}))
            setPrice(data.price)
        } else {
            setInput(prev => ({...prev, service_name: services[0]?.title}))
        }

    })

    const changeInput = (value, name) => {
        setError(prev => ({...prev, [name]: false}))
        setInput(prev => ({...prev, [name]: value}))
    }

    const changeService = (value, el) => {
        setInput(prev => ({...prev, service_name: value}))
        setPrice(el.price)
    }

    const closeModal = (e, key) => {
        // e.preventDefault()
        if(e.target === e.currentTarget || key) {
            document.body.style.overflow = 'visible'
            modal.current.className = 'repair_modal_wrapper close'
            timer.current = setTimeout(() => {
                setIsOpen(false)
                setInput({
                    name: '',
                    service_name: '',
                    phone: '',
                })
                setError({
                    name: false,
                    phone: false,
                    policy: false,
                })
                setSuccess(false)
                setPrice(0)
                setPolicy(false)
            }, 700)
        }
    }

    const sendData = async (e) => {
        e.preventDefault()
        let err = false

        if(!policy) {
            setError(prev => ({...prev, policy: 'Обязательное поле'}))
            err = true
        }
        
        if(input.name === '') {
            setError(prev => ({...prev, name: 'Обязательное поле'}))
            err = true
        }

        if(input.phone === '') {
            setError(prev => ({...prev, phone: 'Обязательное поле'}))
            err = true
        } 

        if(input.phone.length < 18) {
            setError(prev => ({...prev, phone: 'Номер телефона не может содержать менее 10 сиволов'}))
            err = true
        }

        if(err) return

        setLoading(true)

        const body = {...input, price: price}

        const res = await Api.post(`api/orders/services/create`, body)

        setLoading(false)

        if(res !== 'error') {
            setSuccess(true)
        } else {
            Store.setListener('notice', {type: 'error', text: 'Ошибка сервера, попробуйте позже'})
        }
    }

    const openPolicy = (name) => {
        Store.setListener('open_policy', [name, true])
    }

    const checkPolicy = () => {
        setError(prev => ({...prev, policy: false}))
        setPolicy(prev => prev ? false : true)
    }

    useEffect(() => {
        if(isOpen) {
            const handleBackButton = (e) => {
                e.preventDefault(); 
                closeModal(e, true)
            };
        
            window.addEventListener('popstate', handleBackButton);
        
            history.pushState(null, '', window.location.href);
            
            return () => {
                window.removeEventListener('popstate', handleBackButton);
                if(timer.current) {
                    clearTimeout(timer.current)
                }
            }
        }
    }, [isOpen])

    return {
        policy,
        isOpen,
        input,
        success,
        error,
        loading,
        setInput,
        setError,
        closeModal,
        changeInput,
        changeService,
        sendData,
        openPolicy,
        checkPolicy,
        modal,
    }
}