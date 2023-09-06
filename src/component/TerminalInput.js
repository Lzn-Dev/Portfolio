import { Input } from "@nextui-org/react";

function TerminalInput(props) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div
        key="underlined"
        className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
      >
        <Input
          type={props.name}
          variant="underlined"
          label={props.name}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default TerminalInput;
