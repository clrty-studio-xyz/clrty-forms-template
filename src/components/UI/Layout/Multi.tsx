export default function Multi({ children }: { children: any }) {
  return (
    <div className="relative z-0 flex flex-1 overflow-hidden">
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div className="h-full rounded-lg border-2 border-dashed border-gray-200">
            left
          </div>
        </div>
        {/* End main area */}
      </main>
      <aside className="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div className="h-full rounded-lg border-2 border-dashed border-gray-200">
            {children}
          </div>
        </div>
      </aside>
    </div>
  );
}
