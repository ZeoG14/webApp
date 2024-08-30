"use client"
import React from 'react';
import Input from '@/components/ui/Input';
import RegisterButton from "@/components/ui/RegisterButton";
import { useAuthActions } from "@convex-dev/auth/react"

export default function SignUpForm() {

    const { signIn } = useAuthActions()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        void signIn("password", formData)
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-6">
                <div className="mb-6">
                    <label className="ml-0.5 text-black font-bold">Email Address</label>
                    <div className="mt-2">
                        <Input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Email Address"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="ml-0.5 mt-5 text-black font-bold">Password</label>
                    <div className="mt-2">
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            placeholder="Password"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="ml-0.5 mt-5 text-black font-bold">Confirm Password</label>
                    <div className="mt-2">
                        <Input
                            id="confirm-password"
                            name="confirm-password"
                            type="password"
                            autoComplete="new-password"
                            required
                            placeholder="Confirm Password"
                        />
                    </div>
                </div>
            </div>
            <input name="flow" type="hidden"/>
            <div className="mt-5">
                <RegisterButton type="submit">Register</RegisterButton>
            </div>
        </form>
    );
}