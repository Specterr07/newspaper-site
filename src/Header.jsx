import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons"

export default function Header () {
  return (
    <header className="flex justify-between items-center p-3">
        <div className="pl-2">
        <FontAwesomeIcon icon={faBars} className="fill-stone-950"/>
        </div>
        <h2 className="font-chomsky tracking-wide sm:text-2xl md:text-3xl lg:text-5xl">
            Patel Vivek Jagdish
        </h2>
        <div className="pr-2">
        <FontAwesomeIcon icon={faUser} size="lg" className="fill-stone-950"/>
        </div>
    </header>
  )
}