"use client"
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { useState, useEffect } from 'react'

const VerificationForm = () => {
    const [value, setValue] = useState("")
    const [timer, setTimer] = useState(10) // 10 seconds countdown

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 3000)
            return () => clearInterval(interval)
        }
    }, [timer])

    return (
        <div className="flex flex-col items-center justify-center space-y-8 px-4">
            <div className="text-center space-y-2">
                <h1 className="text-blue-950 text-lg font-bold">
                    Please input your verification code
                </h1>
                <p className="text-blue-950 text-sm">OTP message has been sent to your email</p>
            </div>

            <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
                className="flex justify-center gap-4"
            >
                <InputOTPGroup>
                    {[...Array(6)].map((_, index) => (
                        <InputOTPSlot
                            key={index}
                            index={index}
                            className="  border-gray-500 w-15 h-12 text-center text-xl"
                        />
                    ))}
                </InputOTPGroup>
            </InputOTP>

            <div className="text-center text-sm text-gray-600 mt-4">
                {timer > 0 ? (
                    <>Resend code in ({timer}s)</>
                ) : (
                    <Button
                        className="text-white bg-blue-950 w-full hover:bg-blue-900 font-medium"
                        onClick={() => setTimer(30)} 
                    >
                        Resend Code
                    </Button>
                )}
            </div>
        </div>
    )
}

export default VerificationForm
