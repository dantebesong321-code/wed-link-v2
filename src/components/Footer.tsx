import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer className=" flex gap-2 justify-center  
    border-t
    border-zinc-200
    bg-white
  ">
    <div className="
      max-w-7xl
      mx-auto
      py-8
      text-center
      text-zinc-500
    ">
      WedLink by Dante Besong © 2026

      <div>
        <br /><Link to={"https://github.com/dantebesong321-code"}>Github</Link></div>
    </div>
    

    </footer>
  )
}
export default Footer