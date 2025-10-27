import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { GrNext, GrPrevious } from 'react-icons/gr';

const ResultPage = ({ onViewLeaderboard }) => {
	const [activeTab, setActiveTab] = useState('result');
	const { id } = useParams();
	const [result, setResult] = useState(null);
	const [currentCharacter, setCurrentCharacter] = useState(null);
	const [idx, setIdx] = useState(0);

	const getResult = () => {
		const data = JSON.parse(localStorage.getItem("currentResult"));
		setResult(data.topMatches);
		setCurrentCharacter(data.topMatches[0]);
	}

	const goToNext = () => {
		setIdx(prev => (prev === 2 ? 0 : prev + 1));
	};

	const goToPrevious = () => {
		setIdx(prev => (prev === 0 ? 2 : prev - 1));
	};

	useEffect(() => {
		if (!result) return;

		setCurrentCharacter(result[idx]);
	}, [idx, result]);

	useEffect(() => {
		getResult();
	}, [id]);

	if (!result || !currentCharacter) {
		return (
			<div className="fixed inset-0 flex items-center justify-center bg-black/80 text-gold font-elegant text-2xl">
				Loading your result...
			</div>
		);
	}

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden parchment-bg">
			{/* Background layers */}
			<div className="absolute inset-0 opacity-30 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold-light/20"></div>
				<div className="absolute inset-0 bg-parchment-texture"></div>
			</div>

			<motion.div
				className="absolute inset-0 bg-bronze/80 z-[1]"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.45 }}
				transition={{ duration: 1 }}
			/>

			<AnimatePresence mode="wait">
				<motion.div
					key={currentCharacter.character.id}
					className="relative z-[20] bg-center bg-cover bg-no-repeat w-full max-w-4xl min-h-[80vh] mx-4 flex flex-col items-center justify-center"
					style={{
						backgroundImage: `url("/images/QuestionOverlay.png")`,
						filter: 'brightness(1.05) contrast(1.05)'
					}}
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: -20 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					{/* Close Button */}
					<Link
						to="/"
						className="absolute top-6 right-10 w-10 h-10 bg-bronze/20 hover:bg-bronze/30 rounded-full flex items-center justify-center text-bronze hover:text-bronze-dark transition-colors z-10 font-semibold cursor-pointer"
					>
						✕
					</Link>

					{/* Header Section */}
					<div className="relative p-4 text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-bronze mb-3"
						>
							You are {currentCharacter.character.name}!
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="text-xl sm:text-2xl font-elegant text-bronze/80 mb-4 font-bold"
						>
							{currentCharacter.character.title}
						</motion.p>

						{/* Score Display */}
						<div className='flex w-full items-center justify-center mb-3 gap-10'>
							<motion.button
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.5, type: "tween" }}
								className="rounded-full bg-bronze/30 hover:bg-bronze/50 p-4 cursor-pointer border-none outline-none"
								onClick={() => goToPrevious()}
							>
								<GrPrevious className='text-lg font-bold text-bronze' />
							</motion.button>

							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
								className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
							>

								<span className="text-2xl">🏆</span>
								<div className="text-center">
									<span className="text-2xl font-bold">{currentCharacter.percent}%</span>
								</div>

							</motion.div>

							<motion.button
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.5, type: "tween" }}
								className="rounded-full bg-bronze/30 hover:bg-bronze/50 p-4 cursor-pointer border-none outline-none"
								onClick={() => goToNext()}
							>
								<GrNext className='text-lg font-bold text-bronze' />
							</motion.button>
						</div>
					</div>

					{/* Content Tabs */}
					<div className="p-4 flex flex-col items-center justify-center w-[80%]">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 }}
						>
							<div className="flex flex-wrap justify-center gap-2 mb-4">
								{[
									{ id: 'result', label: 'Your Character', icon: '🎭' },
									{ id: 'traits', label: 'Personality', icon: '🧠' },
									{ id: 'style', label: 'Style Guide', icon: '✨' }
								].map((tab) => (
									<button
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={`px-6 py-3 rounded-full font-elegant font-semibold transition-all ${activeTab === tab.id
											? 'bg-gold text-white shadow-lg scale-105'
											: 'bg-white/50 text-bronze hover:bg-white/70'
											}`}
									>
										<span className="mr-2">{tab.icon}</span>
										{tab.label}
									</button>
								))}
							</div>

							<AnimatePresence mode="wait">
								<motion.div
									key={activeTab}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.3 }}
									className="bg-white/70 rounded-2xl p-8 min-h-[300px] w-full"
								>
									{activeTab === 'result' && (
										<div className="text-center">
											<div className={`w-full h-3 bg-gradient-to-r ${currentCharacter.character.color} rounded-full mb-6`}></div>
											<p className="text-lg leading-relaxed text-bronze font-elegant mb-6">
												{currentCharacter.character.description}
											</p>
											<div className="bg-gold/10 rounded-xl p-6 border-l-4 border-gold">
												<p className="text-lg italic text-bronze mb-2 font-serif">
													"{currentCharacter.character.quote}"
												</p>
												<p className="text-sm text-bronze/70 font-elegant">
													- {currentCharacter.character.name}
												</p>
											</div>
										</div>
									)}

									{activeTab === 'traits' && (
										<div>
											<h3 className="text-2xl font-serif font-bold text-bronze mb-6 text-center">Your Personality Traits</h3>
											<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
												{currentCharacter.character.traits.map((trait, index) => (
													<motion.div
														key={index}
														initial={{ scale: 0 }}
														animate={{ scale: 1 }}
														transition={{ delay: index * 0.1 }}
														className="bg-gradient-to-r from-gold/20 to-gold-dark/20 text-bronze px-4 py-3 rounded-full text-center font-elegant capitalize font-semibold"
													>
														{trait}
													</motion.div>
												))}
											</div>
											<div className="text-center">
												<p className="text-bronze/80 font-elegant">
													<strong>Era:</strong> {currentCharacter.character.era}
												</p>
											</div>
										</div>
									)}

									{activeTab === 'style' && (
										<div>
											<h3 className="text-2xl font-serif font-bold text-bronze mb-6 text-center">Your Modern Style Guide</h3>
											<p className="text-lg leading-relaxed text-bronze font-elegant text-center">
												{currentCharacter.character.modernStyle}
											</p>
										</div>
									)}
								</motion.div>
							</AnimatePresence>
						</motion.div>

						{/* Action Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.2 }}
							className="flex flex-wrap justify-center gap-4 mt-8"
						>
							<Link
								to="/question"
								className="bg-gradient-to-r from-gold to-gold-dark text-white px-8 py-4 rounded-full font-elegant font-semibold hover:shadow-lg transition-all hover:scale-105"
							>
								🔄 Play Again
							</Link>
							<Link
								to="/leaderboard"
								className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-elegant font-semibold hover:shadow-lg transition-all hover:scale-105"
							>
								🏆 View Leaderboard
							</Link>
						</motion.div>
					</div>
				</motion.div>
			</AnimatePresence>

			<AnimatePresence mode="wait">
				<motion.img
					key={currentCharacter.character.id}
					src={currentCharacter.character.image}
					alt="Question image"
					className="absolute left-0 bottom-0 z-[20] w-[50vh]"
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 80 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				/>

				<div className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none">
					<motion.img
						src="/images/Layer2.png"
						alt="Layer 2"
						className="absolute bottom-0 w-full object-cover z-[1]"
						initial={{ y: 200, scale: 0.9, opacity: 0 }}
						animate={{ y: [0, -8, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 1.4,
							delay: 0.8,
							ease: [0.22, 1, 0.36, 1],
							y: {
								duration: 4.5,
								repeat: Infinity,
								repeatType: "reverse",
								ease: "easeInOut",
							},
						}}
					/>
				</div>
			</AnimatePresence>
		</section>
	);
};

export default ResultPage;