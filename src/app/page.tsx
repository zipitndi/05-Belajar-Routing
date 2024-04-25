import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Welcome to Home Andii</h1> 
            <Link href='/profile'>Profile</Link> <br/>
            <Link href='/about'>About</Link> <br/>
            <Link href='/blogs'>Blogs</Link> <br/>
            <Link href='/products'>Products</Link> <br/>
        </div>
    );
  }