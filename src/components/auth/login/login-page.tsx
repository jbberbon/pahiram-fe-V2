"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Flex, Heading } from "@radix-ui/themes";
import { LayoutDashboard } from "lucide-react";
import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl">
        <Card className="flex flex-col md:flex-row rounded-lg shadow-lg md:h-auto lg:h-[600px] md:w-full">
          {/* Image side */}
          <div className="hidden md:block w-full h-48 md:w-1/2 md:h-auto">
            <img
              src="/login-image-ram.jpg"
              alt="APC Logo"
              className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>

          {/* Form side */}
          <div className="flex flex-col justify-center w-full p-8 md:p-12 md:w-1/2">
            <Flex justify="center" align="center" direction="column" gap="3">
              <Flex display="inline-flex" align="center" gap="1">
                <LayoutDashboard className="fill-current w-8 h-8 text-[hsl(var(--primary))]" />
                <Heading
                  trim="both"
                  as="h1"
                  size="8"
                  weight="bold"
                  className="text-[hsl(var(--primary))]"
                >
                  Pahiram
                </Heading>
              </Flex>
              <p className="mb-6 text-sm">APC Equipment Lending System</p>
            </Flex>
            {/*Login form*/}
            <LoginForm />
            <div className="mt-8 text-center">
              <p className="rt-r-weight-bold text-xs text-gray-500 dark:text-yellow-500">
                The Polarber Group © 2023
              </p>
              <Link
                href="#"
                className="text-xs text-blue-600 dark:text-gray-50"
                prefetch={false}
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
