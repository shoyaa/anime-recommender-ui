export const getAnimeSchedule = async (weekQuery: string) => {
  try {
    const res = await fetch(
      `https://animeschedule.net/api/v3/timetables/sub?week=${weekQuery}`,
      {
        headers: {
          Authorization: "Bearer bjztMXATp7mFeo7xWGgVroi8b3FfiI",
          "Content-Type": "application/json",
        },
      }
    );

    const scheduleData = await res.json();
    return scheduleData;
  } catch (err) {
    return null;
  }
};
