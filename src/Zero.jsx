import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef,useState } from "react";

export default function Zero() {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setMouse({ x, y });
  };

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth spring physics (premium feel)
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  // Multi-layer parallax
  const bgY = useTransform(smoothScroll, [0, 1], [0, -200]);
  const midY = useTransform(smoothScroll, [0, 1], [0, 150]);
  const carY = useTransform(smoothScroll, [0, 1], [0, 300]);

  // Advanced transforms
  const scale = useTransform(smoothScroll, [0, 1], [1, 1.25]);
  const rotate = useTransform(smoothScroll, [0, 1], [0, 12]);
  const opacity = useTransform(smoothScroll, [0, 0.8], [1, 0]);
  const blur = useTransform(smoothScroll, [0, 1], [0, 8]);

  const text = "WELCOME ITZ FIZZ".split("");

  return (
    <>
    <section ref={ref} className="h-[200vh] bg-black text-white overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4">

        {/* Background Layer */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
        />

        {/* Mid Layer Glow */}
        <motion.div
          style={{ y: midY }}
          className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl opacity-20"
        />

        {/* Headline */}
        <motion.div
          style={{ opacity }}
          className="flex flex-wrap justify-center text-2xl md:text-6xl font-bold tracking-[0.5em] z-10"
        >
          {text.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, ease: "easeOut" }}
            >
              {char}
            </motion.span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            style={{ opacity }}
            className="flex gap-10 mt-10 flex-wrap justify-center z-10"
          >
            {[
              { value: "98%", label: "Smooth UX" },
              { value: "150+", label: "Animations" },
              { value: "Fast", label: "Performance" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.25 }}
                className="text-center"
              >
                <h2 className="text-2xl md:text-4xl font-bold">{item.value}</h2>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Car with Mouse + Scroll */}
          <motion.img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
            alt="car"
            style={{
              y: carY,
              scale,
              rotateX: mouse.y,
              rotateY: mouse.x,
            }}
            className="mt-16 w-[95%] md:w-[700px] rounded-3xl shadow-2xl z-10 transition-transform duration-200"
          />

          {/* Scroll Hint */}
          <div className="absolute bottom-10 text-sm text-gray-400">
            Scroll Down ↓
          </div>
        </div>
      </section>

          {/* NEXT SECTION */}


      <section className="h-screen bg-white text-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Next Section Appears Smoothly 🚀
          </h2>
          <p className="text-gray-600 max-w-xl">
            This transition shows advanced scroll handling and smooth UI behavior,
            making your project stand out to recruiters.
            </p>
            </motion.div>
            </section>
        </>
        )

    }
