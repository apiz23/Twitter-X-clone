import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaXTwitter, FaApple } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

export const Login: React.FC = () => {
	return (
		<>
			<div
				className="min-h-screen"
				style={{ backgroundColor: "rgba(36, 45, 52, 255)" }}
			>
				<div className="max-w-xl mx-auto pt-40">
					<Card className="bg-black border-none rounded-2xl">
						<CardHeader>
							<CardTitle className="mx-auto w-full -mt-2">
								<div className="grid grid-cols-2">
									<div>
										<button>
											<IoMdClose className="text-white text-left" />
										</button>
									</div>
									<div>
										<FaXTwitter className="text-white h-8 w-8 col-span-2" />
									</div>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="max-w-sm mx-auto pt-0 p-10">
								<h3 className="scroll-m-20 text-3xl font-bold tracking-tight mb-5 text-white">
									Sign in to X
								</h3>
								<Button variant="outline" className="my-5 w-full rounded-full">
									<FcGoogle className="h-6 w-6 me-2" />
									Sign in with Google
								</Button>
								<br />
								<Button variant="outline" className="w-full rounded-full">
									<FaApple className="h-6 w-6 me-2" />
									Sign in with Apple
								</Button>
								<div className="inline-flex items-center justify-center w-full">
									<hr className="w-64 h-px my-8 bg-gray-600 border-0 " />
									<span className="absolute px-3 font-medium text-white -translate-x-1/2 bg-black left-1/2 ">
										or
									</span>
								</div>
								<div className="relative mb-2">
									<input
										type="text"
										id="username"
										className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-md text-gray-900 bg-black dark:bg-gray-700 border border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer"
										placeholder=" "
									/>
									<label
										htmlFor="username"
										className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
									>
										Phone,email or username
									</label>
								</div>
								<Button variant="outline" className="my-5 w-full rounded-full">
									Next
								</Button>
								<Button
									variant="outline"
									className=" mb-10 w-full rounded-full border bg-black text-white"
								>
									Forget password?
								</Button>
								<p className="text-gray-500 mb-6">
									Don't have an account?
									<a href="#" className="ms-1 text-sky-500">
										Sign up
									</a>
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div className="min-h-screen bg-black">
				<div className="grid grid-cols-2">
					<div className="mx-auto min-h-screen justify-center items-center flex">
						<FaXTwitter className="text-white h-96 w-96 col-span-2" />
					</div>
					<div className="max-w-2xl px-32 py-60">
						<FaXTwitter className="text-white h-8 w-8 col-span-2" />
					</div>
				</div>
			</div>
		</>
	);
};
