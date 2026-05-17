import Typewriter from "typewriter-effect";

export default function Type() {
    return (
        <>
            <span className="sr-only">Software Developer, Student, Learner</span>
            <span aria-hidden="true">
                <Typewriter
                    options={{
                        strings: ["Software Developer", "Student", "Learner"],
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        deleteSpeed: 30,
                    }}
                />
            </span>
        </>
    );
}
