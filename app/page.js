import Image from 'next/image';
import Link from 'next/link';
import style from "./page.module.css";
import Title from "./components/title"
import Paragraph from './components/paragraph';
export default function Home() {
  return (

  <div className={style.main}>
  <h1>Home page</h1>
  <Title/>
  <Paragraph/>
  <Link href="/about">take me to about page</Link> 
    </div>
  
    );

}
