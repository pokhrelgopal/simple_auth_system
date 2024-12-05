import Button from "@/components/Button";
import Link from "next/link";
const data = [
  {
    title: "Secure",
    description:
      "State-of-the-art encryption and security measures to protect your data.",
  },
  {
    title: "Easy to Use",
    description: "Simple and intuitive interface for seamless user experience.",
  },
  {
    title: "Scalable",
    description:
      "Designed to grow with your application, from startup to enterprise.",
  },
];
export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-gray-900">
            Welcome to a Simple Authentication Website
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            This is a task assigned to me as a challenge to test my skills in
            building a simple authentication website using Next.js and Node.js.
          </p>

          <div className="flex justify-center space-x-4 mb-16">
            <Link href="/signup" passHref>
              <Button variant="success" className="rounded-lg">
                Get Started
              </Button>
            </Link>
            <Link href="/login" passHref>
              <Button variant="primary" className="rounded-lg">
                Login
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {data.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
