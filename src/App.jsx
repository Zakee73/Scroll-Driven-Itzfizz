
import Zero from './Zero'

function App() {
  return (
    <main>
      <Zero/>
      {/* Add some dummy content after hero to enable scrolling */}
      <div className="h-screen bg-gradient-to-b from-gray-500 to-black text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Scroll Down 👆 to see animation</h2>
      </div>
      
    </main>
  )
}

export default App
