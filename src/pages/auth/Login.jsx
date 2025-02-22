"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import URLS from "@/config/config";
import { fetchRequest } from "@/utils/fetchRequest";
import { API_ENDPOINTS } from "@/config/api_endpoints";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit({email, password}) {
    setIsLoading(true);
    fetchRequest(API_ENDPOINTS.AUTH.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email,password}),
    })
      .then((res) => res.json().then((data) => console.log(data)))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="flex w-full items-center  justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Input
                placeholder="Enter your email"
                {...register("email", {
                  required: "Please enter a valid email address.",
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password must be at least 8 characters long.",
                  minLength: 8,
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox {...register("rememberMe")} />
              <label className="text-sm">Remember me</label>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button variant="link" className="px-0 text-sm text-muted-foreground">
            Forgot password?
          </Button>
          <div className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Button variant="link" className="px-0 text-sm">
              <Link to={URLS.AUTH.REGISTER} className="w-full">
                Sign up
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
