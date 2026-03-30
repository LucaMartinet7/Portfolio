import Typewriter from "typewriter-effect";

export default function Type() {
    return (
        <Typewriter
            options={{
                strings: ["Software Developer", "Student", "Learner"],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
            }}
        />
    );
}
