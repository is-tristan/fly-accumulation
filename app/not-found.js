import WebsiteLayout from "./(website)/layout";
import StatusMessage from "@/components/screens/status/status-message";

export const metadata = {
    title: "Page not found",
};

export default function NotFound() {

    return (

        <WebsiteLayout>

            <StatusMessage
                title="Page not found"
                description="The page you are looking for does not exist."
                actionLabel="Back home"
                actionHref="/"
            />

        </WebsiteLayout>

    );

}
