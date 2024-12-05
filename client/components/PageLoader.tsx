export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-12 h-12 animate-spin">
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full top-0 left-0 animate-loader-circle" />
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full top-0 right-0 animate-loader-circle" />
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full bottom-0 left-0 animate-loader-circle" />
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full bottom-0 right-0 animate-loader-circle" />
      </div>
    </div>
  );
}
