'use client'

import { useEffect, useRef, useState } from "react"
import Store from "@/utils/Store"
import Api from "@/utils/Api"

export default function useRepairModal (services) {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [price, setPrice] = useState(0)
    const [input, setInput] = useState({
        name: '',
        service_name: '',
        phone: '',
    })
    const [error, setError] = useState({
        name: false,
        phone: false,
    })
    const timer = useRef(null)

    Store.useListener('open_repair_modal', (data) => {
        if(data) {
            setInput(prev => ({...prev, service_name: data.title}))
            setPrice(data.price)
        } else {
            setInput(prev => ({...prev, service_name: services[0].title}))
        }

        setIsOpen(true)
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
        if(e.target === e.currentTarget || key) {
            document.body.style.overflow = 'visible'
            setIsOpen(false)
            timer.current = setTimeout(() => {
                setInput({
                    name: '',
                    service_name: '',
                    phone: '',
                })
                setError({
                    name: false,
                    phone: false,
                })
                setSuccess(false)
                setPrice(0)
            }, 700)
        }
    }

    const sendData = async (e) => {
        let err = false
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

    useEffect(() => {
        return () => {
            if(timer.current) {
                clearTimeout(timer.current)
            }
        }
    }, [])

    return {
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
        sendData
    }
}