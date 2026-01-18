export default function AgentTabs({ active, setActive }) {
  const agents = ["Finance", "SCM", "HR"];

  return (
    <div className="agent-tabs">
      {agents.map(agent => (
        <button
          key={agent}
          className={active === agent ? "active" : ""}
          onClick={() => setActive(agent)}
        >
          {agent}
        </button>
      ))}
    </div>
  );
}
