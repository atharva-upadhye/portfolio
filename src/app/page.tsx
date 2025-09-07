import { links, whatIDo, whoAmI } from "@/constants/content";
import { defaultClassName } from "@/utils/tailwind";

export default function Home() {
	return (
		<div
			className="h-screen flex flex-col justify-center gap-6"
			// ref={ref}
		>
			<div className="text-2xl">{`Hello 👋🏽, myself`}</div>
			<h1 className="text-5xl">Atharva Upadhye</h1>
			<div className="text-2xl">{whatIDo}</div>
			<div>{whoAmI}</div>
			<div className="flex flex-row gap-1">
				<div>Check out my</div>
				<a
					title="resume"
					href={links.resume}
					className={`${defaultClassName.a}`}
				>
					resume
				</a>
			</div>

			<div>
				Often times I like to go on hiking trails, swimming and marathon
			</div>
			<div className="flex flex-col gap-2">
				<div>Quick links to further sections:</div>
				<div className="flex flex-row gap-2 flex-wrap">
					{[
						"Projects",
						"Skills",
						"Social handles",
						// "Certificates",
						"Blogs",
						"Timeline",
					].map((v) => (
						<a
							key={v}
							href={`#${v}`}
							className={
								defaultClassName.a + "text-nowrap whitespace-nowrap mx-1"
							}
						>
							{v}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
