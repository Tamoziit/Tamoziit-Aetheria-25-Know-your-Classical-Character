import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import { Link, useNavigate } from 'react-router-dom';
import { getTopMatches } from '../utils/getResult.js';

const QuestionPage = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState([]); // stores option ids aligned with questions: ['a','b',...]
	const [isTransitioning, setIsTransitioning] = useState(false);
	const navigate = useNavigate();

	const totalQuestions = questions.length;
	const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;
	const question = questions[currentQuestion];

	const handleAnswer = (selectedOptionId) => {
		if (isTransitioning) return;

		setIsTransitioning(true);
		const newAnswers = [...answers, String(selectedOptionId).toLowerCase()];
		setAnswers(newAnswers);

		setTimeout(() => {
			if (currentQuestion < questions.length - 1) {
				setCurrentQuestion(currentQuestion + 1);
				setIsTransitioning(false);
			} else {
				// Quiz completed - calculate result using util functions
				console.log(newAnswers);
				const result = calculateResult(newAnswers);
				console.log(result);
				localStorage.setItem("currentResult", JSON.stringify(result));
				setIsTransitioning(false);
				navigate("/result");
			}
		}, 500);
	};

	const calculateResult = (newAnswers) => {
		// top 3 matches (sim, percent, character)
		const topMatches = getTopMatches(newAnswers, 3);

		const result = {
			timestamp: Date.now(),
			topMatches
		};

		return result;
	};

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

			<motion.div
				className="relative z-[2] bg-center bg-cover bg-no-repeat w-full max-w-4xl min-h-[80vh] mx-4 flex flex-col items-center justify-center"
				style={{
					backgroundImage: `url("/images/QuestionOverlay.png")`,
					filter: 'brightness(1.05) contrast(1.05)'
				}}
				initial={{ scale: 0.8, y: 50 }}
				animate={{ scale: 1, y: 0 }}
				exit={{ scale: 0.8, y: 50 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				{/* Close Button */}
				<Link
					to="/"
					className="absolute top-6 right-10 w-10 h-10 bg-bronze/20 hover:bg-bronze/30 rounded-full flex items-center justify-center text-bronze hover:text-bronze-dark transition-colors z-10 cursor-pointer font-bold"
				>
					✕
				</Link>

				{/* Progress Header */}
				<div className="p-6 pb-0 w-[85%]">
					<div className="flex items-center justify-between mb-2">
						<span className="text-gray-900 font-elegant text-lg font-semibold">
							Question {currentQuestion + 1} of {totalQuestions}
						</span>
						<span className="text-gray-900 font-elegant text-lg font-semibold">
							{Math.round(progressPercentage)}% Complete
						</span>
					</div>
					<div className="bg-bronze/80 rounded-full h-3 overflow-hidden border-[1.5px] border-black">
						<motion.div
							className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full"
							initial={{ width: "0%" }}
							animate={{ width: `${progressPercentage}%` }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						/>
					</div>
				</div>

				{/* Question Content */}
				<div className="p-4 flex flex-col items-center justify-center w-[80%]">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentQuestion}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.4 }}
							className="text-center flex flex-col items-center justify-center gap-4"
						>
							{/* Category Badge */}
							<motion.div
								className="bg-gradient-to-r from-gold to-gold-dark text-bronze px-6 py-2 rounded-full text-base font-elegant font-semibold capitalize shadow-lg"
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 0.2, duration: 0.3 }}
							>
								{question.category}
							</motion.div>

							<motion.div
								className="text-8xl"
								style={{
									textShadow: "0 4px 6px rgba(0, 0, 0, 0.4)",
								}}
								initial={{ scale: 0, rotate: -180 }}
								animate={{ scale: 1, rotate: 0 }}
								transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.5 }}
								whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
							>
								{question.emoji}
							</motion.div>

							{/* Question Text */}
							<motion.h2
								className="text-2xl lg:text-3xl font-serif font-bold text-bronze leading-relaxed mx-auto px-3"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.5 }}
							>
								{question.question}
							</motion.h2>

							{/* Answer Options */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
								{question.options.map((option, index) => (
									<motion.button
										key={option.id}
										onClick={() => handleAnswer(option.id)}
										disabled={isTransitioning}
										className="group p-3 bg-white/70 hover:bg-white/90 rounded-2xl text-left transition-all duration-300 border-2 border-transparent hover:border-gold/50 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
										whileHover={{ scale: isTransitioning ? 1 : 1.02, y: isTransitioning ? 0 : -5 }}
										whileTap={{ scale: isTransitioning ? 1 : 0.98 }}
									>
										<div className="flex items-center justify-start gap-4">
											<div className="w-10 h-10 rounded-full border-2 border-gold/90 group-hover:border-gold group-hover:bg-gold/10 flex items-center justify-center text-gold font-bold transition-all duration-300 flex-shrink-0 mt-1">
												{String.fromCharCode(65 + index)}
											</div>
											<span className="text-bronze font-elegant text-lg leading-relaxed group-hover:text-bronze-dark transition-colors font-semibold">
												{option.text}
											</span>
										</div>
									</motion.button>
								))}
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</motion.div>

			<AnimatePresence mode="wait">
				<motion.img
					key={question.image}
					src={question.image}
					alt="Question image"
					className="absolute left-0 bottom-0 z-[20] w-[42vh]"
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 80 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				/>

				<div className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none">
					<motion.img
						src="/images/Layer2.png"
						alt="Layer 2"
						className={`absolute bottom-0 w-full object-cover z-[1] ${question.id % 2 === 0 ? "hidden" : ""}`}
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

					<motion.img
						src="/images/Layer1.png"
						alt="Layer 1"
						className={`absolute bottom-0 w-full object-cover z-[1] ${question.id % 2 === 0 ? "" : "hidden"}`}
						initial={{ y: 200, scale: 0.9, opacity: 0 }}
						animate={{ y: [0, -8, 0], opacity: 1, scale: 1 }}
						transition={{
							duration: 1.2,
							delay: 0.5,
							ease: [0.22, 1, 0.36, 1],
							y: {
								duration: 4,
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

export default QuestionPage;