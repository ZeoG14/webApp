import React from 'react';
import Input from '@/components/ui/Input';
import SignInButton from '@/components/ui/SignInButton';
import Checkbox from "@/components/ui/CheckBox";

export default function LoginForm() {
    return (
        <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-6">
                <div className="mb-6">
                    <label className="ml-0.5 text-black font-bold">Email Address</label>
                    <div className="mt-2">
                        <Input
                            id="email"
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
                            autoComplete="current-password"
                            required
                            placeholder="Password"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <SignInButton type="submit">Sign in</SignInButton>
            </div>
            <div className="flex items-center justify-between">
                <Checkbox id="remember-me" name="remember-me" label="Remember Me"/>
                <a href="/forgot-password" className="text-sm text-gray-600 hover:text-blue-700">
                    Forgot your password?
                </a>
            </div>
        </form>
    );
}