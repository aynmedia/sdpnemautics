/** @format */
'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reavel = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start('visible');
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{
        // position: 'relative',
        overflow: 'hidden',
      }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.div>
    </div>
  );
};

export default Reavel;
