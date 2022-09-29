interface ToggleSwitchProps {
  on: boolean;
}

export default function ToggleSwitch(props: ToggleSwitchProps) {
  return (
    <>
      <div
        class={`cursor-pointer w-14 h-7 flex items-center bg-gray-300 rounded-full px-1 ${
          props.on && "bg-blue-600"
        }`}
      >
        <div
          class={`bg-white w-5 h-5 rounded-full shadow-md transform ${
            props.on && "translate-x-7"
          }`}
        >
        </div>
      </div>
      <p class={props.on ? "" : "line-through"}>Open to Work</p>
    </>
  );
}
