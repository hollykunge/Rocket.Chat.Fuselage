<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rocket.chat/emitter](./emitter.md) &gt; [Emitter](./emitter.emitter.md) &gt; [emit](./emitter.emitter.emit.md)

## Emitter.emit() method

Calls each of the handlers registered for the event of `type` type, in the order they were registered, passing the supplied argument `e` to each.

<b>Signature:</b>

```typescript
emit<T extends AnyEventOf<EventMap>, EventType extends AnyEventTypeOf<EventMap> = EventTypeOf<EventMap, T>>(type: EventType, event: EventOf<EventMap, EventType>): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  type | EventType |  |
|  event | [EventOf](./emitter.eventof.md)<!-- -->&lt;EventMap, EventType&gt; |  |

<b>Returns:</b>

void

