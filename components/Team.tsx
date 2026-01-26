import Image from 'next/image';
import styles from './Team.module.css';

const team = [
  {
    name: 'Aditya Singh',
    role: 'SR Full Stack Dev',
    bio: 'Expert full-stack developer with a passion for building scalable web applications.',
    image: '/AdityaDp.jpg',
  },
  {
    name: 'Shubham Raj Kashyap',
    role: 'SR App Dev',
    bio: 'Experienced app developer focused on creating seamless mobile experiences.',
    image: '/ShubbhamDp.jpg',
  },
  {
    name: 'Amit Kumar',
    role: 'SR AI & Backend Dev',
    bio: 'Backend specialist designing robust architectures and efficient APIs.',
    image: '/amitDP.jpeg',
  },
];

const Team = () => {
  return (
    <section id="team" className={styles.team}>
      <div className="container">
        <h2 className={`text-gradient ${styles.heading}`}>Meet The Core Team</h2>
        <p className={styles.description}>
          Meet the core founding members leading our diverse and growing team of professionals.
        </p>
        <div className={styles.grid}>
          {team.map((member, index) => (
            <div key={index} className={`glass-panel ${styles.card}`}>
              <div className={styles.avatar}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
