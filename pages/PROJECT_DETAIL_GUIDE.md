# Project Detail Page Template Guide

## Cách sử dụng template

1. **Copy file template**
   - Copy `_project-template.html` thành `[project-name].html` (e.g., `berally.html`, `linkwave.html`)

2. **Thay thế các placeholders** (viết hoa với `[...]`)
   - `[PROJECT_NAME]` → Tên dự án (e.g., Berally, DressMe)
   - `[PROJECT_DESCRIPTION]` → Mô tả ngắn cho meta tag
   - `[PROJECT_SHORT_DESCRIPTION]` → Mô tả một dòng cho hero
   - `[PROJECT_IMAGE]` → Tên file ảnh (e.g., Berally, DressMe)
   - `[ROLE]`, `[SERVICES]`, `[DURATION]`, `[STATUS]` → Thông tin quick info
   - `[OVERVIEW_PARAGRAPH]` → Nội dung tổng quan
   - `[CHALLENGE_PARAGRAPH]` → Mô tả thách thức
   - `[APPROACH_PARAGRAPH]` → Cách tiếp cận
   - Và các placeholder khác...

3. **Linh hoạt với cấu trúc**
   - Có thể xóa sections không cần (ví dụ: Process Highlights, Related Projects)
   - Có thể thêm sections mới bằng cách copy một section có sẵn
   - Quick Info Grid: có thể thêm/bớt columns tùy ý

4. **Tùy chỉnh sidebar**
   - Giữ nguyên hoặc thay đổi Key Metrics
   - Giữ nguyên hoặc xóa Client info box

## Cấu trúc sections

### Bắt buộc
- Hero Section (title + description)
- Featured Image
- Overview + sidebar

### Tùy chọn (có thể giữ hoặc xóa)
- Quick Info Grid (tuỳ project)
- Design Insights
- Process Highlights
- Key Takeaway
- Related Projects

## Tips

- Không cần copy hết placeholder, chỉ edit những phần cần thiết
- Giữ nguyên HTML structure để đảm bảo styling consistent
- Các file project detail được link từ `projects.html` bằng nút "View Case"
- Luôn link "Back to Projects" ở cuối trang

## Ví dụ nhanh

```html
<!-- Từ template này: -->
<h1 class="mt-2 text-6xl font-semibold tracking-tight text-white">[PROJECT_NAME]</h1>

<!-- Thành -->
<h1 class="mt-2 text-6xl font-semibold tracking-tight text-white">Berally</h1>
```

## Files hiện tại
- `berally.html` - Project detail cho Berally (đã done)
- `_project-template.html` - Template để tạo project detail mới
