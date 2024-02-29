import { Fragment, useState, useRef, useEffect } from 'react'
import { Dialog,  Disclosure,  Popover, Transition } from '@headlessui/react'
import { faArrowRight, faBars, faChevronDown, faDownload, faHome, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { items } from '@/utilities/navbar'
import { Link } from 'react-router-dom'
import ImgSlider1 from '../../../assets/images/logo_1.png'
import ImgSlider2 from '../../../assets/images/logo_2.png'
import ImgSlider3 from '../../../assets/images/logo_3.png'
import ImgSlider4 from '../../../assets/images/logo_4.png'

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => { headerRef.current.classList.toggle("bg-seed", window.scrollY > 0) }
        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll) }
    }, [])

    return(
        <header ref={headerRef} className="w-full fixed z-50 top-0 left-0 duration-300">
            <nav className="w-11/12 md:w-11/12 lg:w-9/12 mx-auto flex items-center justify-between py-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/">
                        <img className='w-52' src={ImgSlider4} alt="logo" />
                    </Link>
                </div>
                <div className="flex lg:hidden justify-end">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <FontAwesomeIcon icon={faBars} className='text-white fa-xl' />
                    </button>
                </div>
                <div className='flex items-center space-x-6'>
                    <Popover.Group className="hidden lg:flex items-center lg:gap-x-12">
                        <Link to="/about"><FontAwesomeIcon className='text-white' icon={faHome} /></Link>
                        {
                            items && items.length > 0 &&
                                items.map((item, index) =>
                                    <Popover className="relative" key={index}>
                                        <Popover.Button className="text-white flex items-center gap-x-2 text-sm font-semibold leading-6" key={index}>
                                            {item.name}
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </Popover.Button>
                                            
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel
                                                className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-64 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5"
                                            >
                                                <div className="p-4">
                                                    {item.items.map((item) => (
                                                        <div
                                                            key={item.name}
                                                            className="group relative flex items-center gap-x-6 rounded-lg py-2 px-4 text-sm leading-6 hover:bg-gray-100"
                                                        >
                                                            <div className="flex-auto">
                                                                <Link to={item.href} className="flex items-center justify-between font-semibold text-gray-900">
                                                                    {item.name}
                                                                    <FontAwesomeIcon icon={faArrowRight} className='transform -rotate-45' />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </Popover>
                            )
                        }
                        <Link to="/downloads" className='bg-white text-black rounded-full px-3 py-2'>
                            <FontAwesomeIcon icon={faDownload} className='mr-2' />
                            Descargar
                        </Link>
                    </Popover.Group>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <FontAwesomeIcon icon={faXmark} className='fa-xl' />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Introducción
                                </Link>
                                {
                                    items && items.length > 0 &&
                                        items.map((item, index) =>
                                            <Disclosure as="div" className="-mx-3" key={index}>
                                                {({ open }) => (
                                                    <>
                                                        <Fragment key={index}>
                                                            <Disclosure.Button
                                                                className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 bg-gray-200 hover:bg-gray-300 text-gray-900"
                                                            >
                                                                {item.name}
                                                                <FontAwesomeIcon icon={faChevronDown} />
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                                {item.items.map((el) => (
                                                                    <Disclosure.Button
                                                                        as="a"
                                                                        key={el.name}
                                                                        href={el.href}
                                                                        className="flex items-center justify-between rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                                                                    >
                                                                        {el.name}
                                                                        <FontAwesomeIcon icon={faArrowRight} className='transform -rotate-45' />
                                                                    </Disclosure.Button>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </Fragment>
                                                    </>
                                                )}
                                            </Disclosure>
                                        )
                                }
                                <Link
                                    href="/downloads"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Descargar material
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}