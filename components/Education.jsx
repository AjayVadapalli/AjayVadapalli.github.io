import Image from "next/image";
import Link from "next/link";
import React from "react";

const Education = () => {
	return (
		<div className="flex min-h-0 flex-col gap-y-3 relative">
				<div className="w-2 h-3/5 top-1/4 bottom-1/4 bg-card-foreground absolute ml-5 "></div>
			<h2 className="text-xl font-bold relative">Education</h2>
			<div className="flex flex-col space-y-5">
				<Link
					className="block cursor-pointer"
					href="https://www.vishnu.edu.in/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="rounded-lg bg-card text-card-foreground flex items-center ">
						<div className="flex-none">
							<span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-card-foreground size-12 m-auto bg-muted-background dark:bg-foreground">
								<Image
								width={48}
								height={48}
									alt="Vishnu Institute of technology Logo"
									src="./Education/vishnu logo.png"
								/>
							</span>
						</div>
						<div className="flex-grow ml-4 items-center flex-col group">
							<div className="flex flex-col">
								<div className="flex items-center justify-between gap-x-2 text-base">
									<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
										Vishnu Institute of technology, Bhimavaram
									</h3>
									<div className="text-xs sm:text-sm text-muted-foreground text-right flex-shrink-0">
										<div className="">2023 - 2027</div>
										<div className="">8.65 CGPA</div>
									</div>
								</div>
								<h3 className="font-sans text-xs text-muted-foreground">
									Computer Science And Engineering (CSE)
								</h3>
							</div>
						</div>
					</div>
				</Link>
				<Link
					className="block cursor-pointer"
					href="https://sasi.ac.in/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="rounded-lg bg-card text-card-foreground flex items-center ">
						<div className="flex-none">
							<span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-card-foreground size-12 m-auto bg-muted-background dark:bg-foreground">
								<Image
									className="aspect-square h-full w-full object-cover"
									alt="Sasi junior college Logo"
									src="./Education/sasi school.jpg"
									width={48}
									height={48}
								/>
							</span>
						</div>
						<div className="flex-grow ml-4 items-center flex-col group">
							<div className="flex flex-col">
								<div className="flex items-center justify-between gap-x-2 text-base">
									<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
										Sasi Junior College Mandapeta
									</h3>
									<div className="text-xs sm:text-sm text-muted-foreground text-right flex-shrink-0">
										<div className="">2021 - 2023</div>
										<div className="">98.1 %</div>
									</div>
								</div>
								<h3 className="font-sans text-xs text-muted-foreground">
								{/* Pre-University Education in PCMC (Physics, Chemistry, Mathematics) */}
								Pre-University Education 
								</h3>
							</div>
						</div>
					</div>
				</Link>
				<div
					className="block cursor-pointer"
					href={null}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="rounded-lg bg-card text-card-foreground flex items-center ">
						<div className="flex-none">
							<span className="relative flex shrink-0 overflow-hidden rounded-full border-4 border-card-foreground size-12 m-auto bg-muted-background dark:bg-foreground">
								<Image
								width={48}
								height={48}
									alt="sasi school Logo"
									src="./Education/sasi school.jpg"
								/>
							</span>
						</div>
						<div className="flex-grow ml-4 items-center flex-col group">
							<div className="flex flex-col">
								<div className="flex items-center justify-between gap-x-2 text-base">
									<h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
										Sasi English Medium School Mandapeta
									</h3>
									<div className="text-xs sm:text-sm text-muted-foreground text-right flex-shrink-0">
									<div className="">2020 - 2021</div>
									<div className="">95.5 %</div>
									</div>
								</div>
								<h3 className="font-sans text-xs text-muted-foreground">
								Secondary Education
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
