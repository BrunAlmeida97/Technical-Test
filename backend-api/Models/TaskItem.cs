namespace backend_api.Models;

public class TaskItem
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public string Priority { get; set; } = "Normal";

    public string Status { get; set; } = "Not Started";

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}