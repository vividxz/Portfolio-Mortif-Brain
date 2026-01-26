'use client';

import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // REPLACE THESE WITH YOUR EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    const SERVICE_ID = 'service_r4anh27';
    const TEMPLATE_ID = 'template_nezfg63';
    const PUBLIC_KEY = 'BUghMcc0CZMusOQC5';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
          setLoading(false);
          setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
          form.current?.reset();
        }, (error) => {
          setLoading(false);
          setStatus({ type: 'error', message: 'Failed to send message: ' + error.text });
        });
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2 className={styles.heading}>Let's start a project together</h2>
            <p className={styles.subtext}>
              We help ambitious companies build the software of tomorrow.
              Get in touch to discuss your vision.
            </p>
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span>📧</span> admin@motifbrain.online
              </div>
              <div className={styles.detailItem}>
                <span>📍</span> Bangalore, India
              </div>
            </div>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className={`glass-panel ${styles.form}`}>
            <div className={styles.group}>
              <label>Name</label>
              <input type="text" name="name" placeholder="John Doe" required />
            </div>
            <div className={styles.group}>
              <label>Email</label>
              <input type="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className={styles.group}>
              <label>Message</label>
              <textarea name="title" placeholder="Tell us about your project" rows={4} required></textarea>
            </div>
            
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <div className={`${styles.statusMessage} ${status.type === 'success' ? styles.success : styles.error}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
