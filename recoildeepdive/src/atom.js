import { atom, selector } from "recoil";

export const Networkatom = atom({
  key: "Networkatom",
  default: 104,
});

export const Jobsatom = atom({
  key: "Jobsatom",
  default: 47,
});

export const Notificationatom = atom({
  key: "Notificationatom",
  default: 10,
});

export const Messagesatom = atom({
  key: "Messagesatom",
  default: 10,
});

// ✅ Use selector for derived state
export const TotalNotificationCount = selector({
  key: "TotalNotificationCount",
  get: ({ get }) => {
    const networkCount = get(Networkatom);
    const jobsCount = get(Jobsatom);
    const notificationCount = get(Notificationatom);
    const messagesCount = get(Messagesatom);

    return networkCount + jobsCount + notificationCount + messagesCount;
  },
});
