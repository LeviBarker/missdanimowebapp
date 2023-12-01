import Image from "next/image";

interface ProjectMetadataProps {
  messiness_level: string;
  grownup_involvement: string;
  time_minutes: number;
}

export default function ProjectMetadata(props: ProjectMetadataProps) {
  return (
    <div className="font-medium text-white text-sm flex items-center gap-1 whitespace-nowrap">
      <span className="flex items-center gap-1">
        <Image
          src="/paint_brush_white.svg"
          width={16}
          height={16}
          alt="Paint brush icon"
        />
        {props.messiness_level}
      </span>
      <span className="font-bold text-lg">&middot;</span>
      <span className="flex items-center gap-1">
        <Image
          src="/grown_up_white.svg"
          width={16}
          height={16}
          alt="Grown up icon"
        />
        {props.grownup_involvement}
      </span>
      <span className="font-bold text-lg">&middot;</span>
      <span className="flex items-center gap-1">
        <Image src="/time_white.svg" width={16} height={16} alt="Time icon" />
        {props.time_minutes} min
      </span>
    </div>
  );
}
