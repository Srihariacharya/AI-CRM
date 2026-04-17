export default function InteractionForm({ formData }) {
  return (
    <div>
      <h2>Log Interaction</h2>

      <input value={formData?.hcp_name || ""} placeholder="HCP Name" />
      <input value={formData?.interaction_type || ""} placeholder="Type" />
      <input value={formData?.sentiment || ""} placeholder="Sentiment" />
      <input value={formData?.follow_up || ""} placeholder="Follow-up" />
    </div>
  );
}