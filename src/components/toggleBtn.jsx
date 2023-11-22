import { Switch } from "@headlessui/react";

const ToggleBtn = () => {
    const [enabled, setEnabled] = useState(true)
  return (
    <>
      <div className="pt-10 pb-20 text-center">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-orange-700' : 'bg-rose-700'}
          relative inline-flex h-[38px] w-[150px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}>
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-28' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </>
  )
}

export default ToggleBtn
