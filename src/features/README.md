# Слой Features

Этот слой содержит функциональные модули приложения. Каждый модуль представляет собой отдельную функциональность, которая может быть использована в разных частях приложения.

## Структура

```
features/
  ├── auth/                # Аутентификация
  ├── invoice-create-form/ # Форма создания счета
  ├── search/             # Поиск
  ├── pagination/         # Пагинация
  └── breadcrumbs/        # Навигационные хлебные крошки
```

## Правила

1. Features могут зависеть от entities и shared слоев
2. Каждый feature должен быть самодостаточным
3. Features не должны зависеть друг от друга
4. Публичное API должно быть экспортировано через index.ts
5. UI компоненты должны быть в поддиректории ui/
6. Бизнес-логика должна быть в поддиректории model/ 