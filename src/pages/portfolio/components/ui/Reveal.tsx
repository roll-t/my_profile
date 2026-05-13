import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export const Reveal = ({ children, delay = 0, className = "", onClick }: { children: ReactNode, delay?: number, className?: string, onClick?: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.div>
);
