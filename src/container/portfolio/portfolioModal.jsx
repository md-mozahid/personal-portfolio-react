import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const PortfolioModal = ({ isOpen, setIsOpen, closeModal }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(true)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-500"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-50">
                <Dialog.Panel className="w-full max-w-xl p-6 transform overflow-hidden rounded-2xl bg-slate-700  text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-center flex-col relative">
                    <img
                      className="mb-5 object-cover object-center rounded-xl"
                      alt="hero"
                      src="https://dummyimage.com/720x600"
                    />
                    <div className="absolute top-1 right-1 text-xl p-1 rounded-full text-white bg-purple-500 hover:bg-rose-600 hover:text-white hover:scale-110 transition-all">
                      <AiOutlineClose onClick={closeModal} />
                    </div>
                    <div className="w-full text-left">
                      <h3 className="title-font sm:text-3xl text-2xl mb-4 font-medium">
                        Microwaving synth tattooed vexill
                      </h3>
                      <p className="mb-8 leading-relaxed">
                        Meggings kinfolk echo park stumptown DIY, kale chips
                        beard jianbing tousled. Chambray dreamcatcher trust
                        fund, kitsch vice godard disrupt ramps hexagon.
                      </p>
                      <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                          Preview
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          GitHub
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default PortfolioModal
