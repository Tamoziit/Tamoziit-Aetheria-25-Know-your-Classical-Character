import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden parchment-bg">
      {/* Background layers */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold-light/20"></div>
        <div className="absolute inset-0 bg-parchment-texture"></div>
      </div>

      <motion.div
        className="absolute inset-0 bg-black/80 z-[5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="relative z-[20] text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center mb-6">
          <motion.img
            src="/images/Aetheria.png"
            alt="Logo"
            className='rounded-full size-[12rem]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn", delay: 1 }}
          />

          <motion.h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold">
            <div className="overflow-hidden">
              <motion.span
                className="text-gradient-gold inline-block"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
              >
                Aetheria
              </motion.span>
            </div>
            <motion.span
              className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-elegant font-normal text-white mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
            >
              2025
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-xl font-semibold sm:text-2xl lg:text-3xl font-elegant italic text-white mb-4"
        >
          Fashion Through Classical Literature
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-lg font-semibold sm:text-xl font-elegant text-white/80 mb-12"
        >
          Presented by <span className="text-2xl font-semibold text-gold">Heritage Fashion Club</span>
        </motion.p>

        <motion.div variants={fadeInUp}>
          <motion.button
            onClick={() => navigate("/question")}
            className="vintage-button text-white font-serif font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full inline-flex items-center gap-3 group"
            whileHover={{
              scale: 1.05,
              rotateX: -5,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.95,
              rotateX: 5,
              rotateY: -5,
            }}
            animate={{
              y: [0, -3, 0],
              boxShadow: [
                "0 10px 30px rgba(212, 175, 55, 0.3)",
                "0 15px 40px rgba(212, 175, 55, 0.4)",
                "0 10px 30px rgba(212, 175, 55, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>Play Now</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0 h-0 border-l-[8px] border-l-white border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent"
            />
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none">
        <motion.img
          src="/images/Layer2.png"
          alt="Layer 2"
          className="absolute bottom-[20vh] w-full object-cover z-[2]"
          initial={{ y: 200, scale: 0.9, opacity: 0 }}
          animate={{ y: [0, -20, 0], opacity: 1, scale: 1 }}
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
          className="absolute bottom-0 w-full object-cover z-[3]"
          initial={{ y: 200, scale: 0.9, opacity: 0 }}
          animate={{ y: [0, -15, 0], opacity: 1, scale: 1 }}
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
    </section>

  );
};

export default HomePage;