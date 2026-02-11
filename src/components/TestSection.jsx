export default function TestSection() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1508873699372-7aeab60b44ab')`,
      }}
    >
      <div className="bg-white/30 backdrop-blur-md flex items-center justify-center h-screen">
        <p className="text-lg">Frosted Glass Effect</p>
      </div>
    </div>
  );
}
