import { team } from "../content";
import SectionHeading from "./ui/SectionHeading";
import Placeholder from "./ui/Placeholder";

export default function Team() {
  return (
    <section id="team" className="section-pad">
      <SectionHeading accent="Crew">Meet the</SectionHeading>
      <p className="mx-auto mt-4 max-w-lg text-center font-retro text-xl text-muted">
        Four people, too many ideas. [placeholder avatars]
      </p>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {team.map((member) => (
          <div key={member.id} className="pixel-card p-4 text-center">
            <Placeholder
              label={member.name}
              color={member.color}
              aspect="aspect-square"
              className="!border-0"
            />
            <div className="mt-4 font-pixel text-[9px] text-ink">
              {member.name}
            </div>
            <div className="mt-2 font-pixel text-[7px] uppercase text-neon">
              {member.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
