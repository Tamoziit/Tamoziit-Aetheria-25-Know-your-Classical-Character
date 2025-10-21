const Topbar = () => {
	return (
		<div className="w-full flex items-center justify-between absolute top-0 left-0 z-[100] py-4 px-8">
			<img
				src="/images/HFC.jpg"
				alt="HFC Logo"
				className="size-16 rounded-full"
			/>

			<img
				src="/images/Heritage.png"
				alt="Heritage Logo"
				className="size-16 rounded-full"
			/>
		</div>
	)
}

export default Topbar