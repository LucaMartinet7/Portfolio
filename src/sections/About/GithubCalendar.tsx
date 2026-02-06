import { GitHubCalendar } from "react-github-calendar";

export default function GithubCalendar() {
    return (
        <div className="mt-16">
            <h3 className="text-xl font-medium">Days I code</h3>
        <div className="mt-6 overflow-x-auto flex justify-center scale-125 origin-top">
                <GitHubCalendar username="lucamartinet7" />
            </div>
        </div>
    );
}
