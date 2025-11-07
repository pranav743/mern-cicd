import { Router } from "express";
const router = Router();
router.get("/health", (req, res) => {
  res.json({ message: "Server is running" });
});
router.get("/items", (req, res) => {
  res.json({ items: ["item1", "item2", "item3"] });
});
export default router;