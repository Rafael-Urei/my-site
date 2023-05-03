'use client';
import Image from 'next/image'
import styles from './page.module.css'
import { Fade, Reveal } from 'react-awesome-reveal'
import Languages from './components/Languages';
import { useEffect, useState } from 'react';
import { AiOutlineMenu as Menu, AiOutlineClose as Close } from 'react-icons/ai'

export default function Home() {

  const [width, setWidth] = useState(window.innerWidth);

  const [show, setShow] = useState(false);

  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const WindowResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', WindowResize)
  })

  const projects = [
    
    {
      id: 1,
      title: 'To Do List',
      img: {
        src: '/notfound.jpg',
        alt: 'Todolist-site'
      },
      description: 'This is a full project that includes a Login, Register and a To do List with your tasks and data saved in the Firebase FireStore.',
      link: '#'
    },

    {
      id: 2,
      title: 'Firebase Login Project',
      img: {
        src: '/notfound.jpg',
        alt: 'Firebaselogin-site'
      },
      description: 'This is a little project that I\'ve made to practice Firebase and the useForm hook.',
      link: '#'
    },

    {
      id: 3,
      title: 'Interactive Card Form',
      img: {
        src: '/card.png',
        alt: 'card-site'
      },
      description: 'This is a project from FrontEnd Mentor, that I\'ve made using React. This consists in a Form that you can register your credit card data.',
      link: 'https://merry-narwhal-bbcdde.netlify.app/'
    }
  ]

  return (
    <main className={styles.main}>
      { width <= 1080 ? 

        <>
          <h1 className={styles.logo}>
            <a href="#">Rafael-Urei</a>
          </h1>
          <div className={styles.menu_container} onClick={() => setShow(!show)}>
            { !show ? <Menu/> : <Close/> }
          </div>
          <div className={ show ? styles.menu : styles.menu_off }>
            <ul>
              <ul className={styles.nav_list2}>
                <li className={styles.nav_item}><a href="#aboutme" className={styles.nav_link}>About Me</a></li>
                <li className={styles.nav_item}><a href="#portfolio" className={styles.nav_link}>Portfolio</a></li>
                <li className={styles.nav_item}><a href="#contact" className={styles.nav_link}>Contact Me</a></li>
              </ul>
            </ul>

            <ul className={styles.nav_list2}>
              <li className={styles.nav_item}><a href="https://www.instagram.com/rafael_urei/" target='_blank' className={styles.nav_link}>Instagram</a></li>
              <li className={styles.nav_item}><a href="https://github.com/Rafael-Urei" target='_blank' className={styles.nav_link}>GitHub</a></li>
              <li className={styles.nav_item}><a href="https://api.whatsapp.com/send?phone=5561995272316" target='_blank' className={styles.nav_link}>WhatsApp</a></li>
            </ul>
          </div>
        </>

      :
      
        <header className={styles.header}>
          <div className={styles.nav_container}>
            <h1 className={styles.logo}>
              <a href="#">Rafael-Urei</a>
            </h1>
            <nav className={styles.nav}>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}><a href="#aboutme" className={styles.nav_link}>About Me</a></li>
                <li className={styles.nav_item}><a href="#portfolio" className={styles.nav_link}>Portfolio</a></li>
                <li className={styles.nav_item}><a href="#" className={styles.nav_link}>Contact Me</a></li>
              </ul>
            </nav>
            <nav className={styles.nav2}>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}><a href="https://www.instagram.com/rafael_urei/" target='_blank' className={styles.nav_link}>Instagram</a></li>
                <li className={styles.nav_item}><a href="https://github.com/Rafael-Urei" target='_blank' className={styles.nav_link}>GitHub</a></li>
                <li className={styles.nav_item}><a href="https://api.whatsapp.com/send?phone=5561995272316" target='_blank' className={styles.nav_link}>WhatsApp</a></li>
              </ul>
            </nav>
          </div>
        </header>

      }

      <section className={styles.aboutme}>
          <Fade cascade duration={2000}>
            <Image
            id='aboutme'
            className={styles.profile_picture}
            src='/me.png'
            alt='profile'
            width={400}
            height={400}>
            </Image>
          </Fade>
          <div>
            <Fade cascade duration={1000} delay={250}>
              <h1><span>&lt;h1&gt;</span>Olá, me chamo Rafael!<span>&lt;/h1&gt;</span></h1>
              <span className={styles.span_p}>&lt;p&gt;</span>
                <p className={styles.p}>
                    Estudo programação desde 2021, autodidata. Minha principal linguagem de programação é JavaScript,
                    possuo também boas noções de HTML e CSS.
                    Atualmente estou estudando TypeScript e React e estou cursando Ciências da Computação pela instituição
                    Descomplica. Meu hobbie é produzir artes digitais o que me possibilita ter algumas noçoes de design, como valores e cores.
                </p>
              <span className={styles.span_p}>&lt;/p&gt;</span>
            </Fade>
              <div className={styles.languages_container}>
                <Languages/>
              </div>
          </div>
      </section>

      <section className={styles.projects_container}>
        {projects.slice(0, visible).map(project => {
          return (
            <Reveal key={project.id} duration={1000} delay={500}>
              <div className={styles.project} id='portfolio'>
                <div className={styles.project_data}>
                  <h1><a href={project.link} target='_blank' rel='credit-card-form-site'>{project.title}</a></h1>
                  <p>{project.description}</p>
                  <a href={project.link} target='_blank' rel='credit-card-form-site'>
                    <Image
                      className={styles.project_img}
                      src={project.img.src}
                      alt={project.img.alt}
                      width={600}
                      height={350}
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          )
        })}
        {visible < 3 ? <button onClick={() => setVisible(prev => prev + 1)} className={styles.increment_button}>Show More</button> : 
        <button onClick={() => setVisible(prev => prev - 2)} className={styles.increment_button}>Show Less</button>
        }
      </section>

      <footer className={styles.footer}>
        <div>
          <h2 className={styles.h2}>Where to find me?</h2>
          <ul className={styles.list}>
            <li>61 99527-2316</li>
            <li>rafaelss.dev@gmail.com</li>
          </ul>
        </div>
        <div>
          <h2 className={styles.h2}>Other sites and portfolios:</h2>
          <ul className={styles.list}>
            <li><a href='https://codesandbox.io/u/Rafael-Urei' target='_blank'>CodeSandBox</a></li>
            <li><a href='https://codepen.io/rafael-urei' target='_blank'>CodePen</a></li>
          </ul>
        </div>
        <p className={styles.footer_create} id='contact'>Created by Rafael</p>
      </footer>
    </main>
  )
}