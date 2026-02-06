export default function AboutCard() {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-white/70 leading-relaxed">
                I’m Luca Martinet, from Ornex, France. I’m a software development student at
                Epitech. I enjoy building reliable systems and learning by shipping projects.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-white/60">
                <li>• Gym</li>
                <li>• Travelling</li>
                <li>• Games</li>
            </ul>

            <p className="mt-6 text-sm text-white/60">
                <span className="text-white/80">“If you’re not improving, you’re falling behind.”</span>{" "}
                — Chris Bumstead
            </p>
        </div>
    );
}
