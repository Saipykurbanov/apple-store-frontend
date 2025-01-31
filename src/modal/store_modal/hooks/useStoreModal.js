'use client'

import Api from "@/utils/Api"
import Store from "@/utils/Store"
import { useEffect, useRef, useState } from "react"

export default function useStoreModal (course) {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [policy, setPolicy] = useState(false)
    const [input, setInput] = useState({
        username: '',
        phone: '',
        address: '',
        title: '',
        productid: '',
        image: '',
        memory: '',
        price: '',
        color: '',
        colorname: '',
    })
    const [error, setError] = useState({
        username: false,
        phone: false,
        address: false,
        policy: false,
    })
    const timer = useRef(null)
    const modal = useRef(null)

    Store.useListener('open_store_modal', (data) => {
        setIsOpen(true)
        setInput(prev => ({...prev, 
            title: data.title,
            productid: data.productid,
            image: data.main_image,
            memory: data.memory,
            price: data.price * course,
            color: data.color,
            colorname: data.colorname,
        }))
    })

    const changeInput = (value, name) => {
        setError(prev => ({...prev, [name]: false}))
        setInput(prev => ({...prev, [name]: value}))
    }

    const closeModal = () => {
        document.body.style.overflow = 'visible'
        modal.current.className = 'store_modal_wrapper close'
        timer.current = setTimeout(() => {
            setInput({
                username: '',
                phone: '',
                address: '',
                title: '',
                productid: '',
                image: '',
                memory: '',
                price: '',
                color: '',
                colorname: '',
            })
            setError({
                username: false,
                phone: false,
                address: false,
                policy: false,
            })
            setSuccess(false)
            setPolicy(false)
            setIsOpen(false)
        }, 700)
    }

    const sendData = async (e) => {
        e.preventDefault()
        
        let err = false

        if(!policy) {
            setError(prev => ({...prev, policy: 'Обязательное поле'}))
            err = true
        }

        if(input.username === '') {
            setError(prev => ({...prev, username: 'Обязательное поле'}))
            err = true
        }

        if(input.address === '') {
            setError(prev => ({...prev, address: 'Обязательное поле'}))
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

        const res = await Api.post(`api/orders/create`, input)

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
                closeModal()
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
        error,
        loading,
        success,
        setError,
        setInput,
        closeModal,
        changeInput,
        sendData,
        openPolicy,
        checkPolicy,
        modal,
    }
}