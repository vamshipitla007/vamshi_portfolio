import React, { useMemo, useRef, useState } from "react";
import {
  Mail,
  Cake,
  Phone,
  MapPin,
  Paperclip,
  Smile,
  Image as ImageIcon,
  Send,
  Heart,
  MessageCircle,
  CornerDownRight,
  Play,
  Pause,
  X,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

/* ========================================================================== */
/*  Types                                                                     */
/* ========================================================================== */

interface Friend {
  id: string;
  name: string;
  role: string;
}

interface Comment {
  id: string;
  author: string;
  time: string;
  text: string;
  likes: number;
  liked: boolean;
  replies: Comment[];
}

interface Post {
  id: string;
  author: string;
  date: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  caption: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
}

/* ========================================================================== */
/*  Seed / constants                                                          */
/* ========================================================================== */

const PROFILE = {
  name: "Ronald Robertson",
  title: "Creative Director",
  email: "robe@example.com",
  birthday: "17 March 1985",
  phone: "+1 (070) 123-8459",
  location: "New York, NY",
  cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
};

const FRIENDS: Friend[] = [
  { id: "f1", name: "Ronald Robertson", role: "Product Designer" },
  { id: "f2", name: "Regina Cooper", role: "Project Manager" },
  { id: "f3", name: "Judith Black", role: "Creative Director" },
  { id: "f4", name: "Dustin Williamson", role: "Web Developer" },
  { id: "f5", name: "Nathan Fox", role: "Business Analyst" },
  { id: "f6", name: "Calvin Flores", role: "Designer" },
  { id: "f7", name: "Brandon Pena", role: "Product Designer" },
  { id: "f8", name: "Courtney Nguyen", role: "Designer" },
  { id: "f9", name: "Kathryn Cooper", role: "Developer" },
  { id: "f10", name: "Cody Lane", role: "Web Developer" },
];

const PHOTO_TILES = [
  "linear-gradient(135deg,#5EEAD4,#0EA5E9)",
  "linear-gradient(135deg,#C084FC,#F472B6)",
  "linear-gradient(135deg,#FDBA74,#EA580C)",
  "repeating-linear-gradient(45deg,#111827,#111827 6px,#1F2937 6px,#1F2937 12px)",
  "linear-gradient(135deg,#4ADE80,#16A34A)",
  "linear-gradient(135deg,#2DD4BF,#0891B2)",
  "linear-gradient(135deg,#FDA4AF,#FB7185)",
  "linear-gradient(135deg,#FBBF24,#F97316)",
  "linear-gradient(135deg,#38BDF8,#6366F1)",
];

const SEED_POSTS: Post[] = [
  {
    id: "p1",
    author: "Dustin Williamson",
    date: "Jan 17, 2020",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    caption:
      "Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes. We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations.",
    likes: 50,
    liked: false,
    comments: [
      {
        id: "c1",
        author: "Judith Black",
        time: "1 day ago",
        text: "Very interesting and informative article. I learned a lot of new and interesting. 🙂",
        likes: 5,
        liked: false,
        replies: [
          {
            id: "c1r1",
            author: "Nathan Fox",
            time: "5 min ago",
            text: "Hello! I agree, a very interesting article. Thank you very much!",
            likes: 0,
            liked: false,
            replies: [],
          },
        ],
      },
      {
        id: "c2",
        author: "Calvin Flores",
        time: "3 day ago",
        text: "Thanks for the good article. Looking forward to new ones. 🤩",
        likes: 3,
        liked: false,
        replies: [],
      },
    ],
  },
  {
    id: "p2",
    author: "Dustin Williamson",
    date: "Jan 15, 2020",
    mediaType: "video",
    mediaUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    caption:
      "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.",
    likes: 50,
    liked: false,
    comments: [
      {
        id: "c3",
        author: "Regina Cooper",
        time: "5 day ago",
        text: "Very interesting and informative. I learned a lot of new and interesting things.",
        likes: 5,
        liked: false,
        replies: [
          {
            id: "c3r1",
            author: "Ronald Robertson",
            time: "5 day ago",
            text: "Hello! I agree a very interesting. Thank you very much! 🙂",
            likes: 3,
            liked: false,
            replies: [],
          },
        ],
      },
    ],
  },
];

/* ========================================================================== */
/*  Utilities                                                                 */
/* ========================================================================== */

let uidCounter = 0;
const uid = (p: string) => `${p}-${Date.now()}-${uidCounter++}`;

const AVATAR_COLORS = ["#FCA5A5", "#93C5FD", "#FCD34D", "#86EFAC", "#C4B5FD", "#F9A8D4", "#67E8F9", "#FDBA74"];
const avatarColor = (name: string) => AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Avatar: React.FC<{ name: string; size?: number; rounded?: "full" | "xl" }> = ({ name, size = 36, rounded = "full" }) => (
  <div
    className={`flex shrink-0 items-center justify-center font-semibold text-white ${rounded === "full" ? "rounded-full" : "rounded-2xl"}`}
    style={{ backgroundColor: avatarColor(name), width: size, height: size, fontSize: size * 0.36 }}
  >
    {initials(name)}
  </div>
);

/* ========================================================================== */
/*  Emoji picker (shared, minimal)                                            */
/* ========================================================================== */

const EMOJIS = ["🙂", "😀", "😍", "🎉", "👍", "🔥", "❤️", "😅", "🤩", "😢"];

const EmojiPopover: React.FC<{ onSelect: (e: string) => void; onClose: () => void }> = ({ onSelect, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseLeave={onClose}
      className="absolute bottom-full right-0 z-30 mb-2 flex w-56 flex-wrap gap-1.5 rounded-xl border border-gray-100 bg-white p-3 shadow-2xl"
    >
      {EMOJIS.map((e) => (
        <button key={e} onClick={() => onSelect(e)} className="rounded-md p-1 text-lg hover:bg-gray-50">
          {e}
        </button>
      ))}
    </div>
  );
};

/* ========================================================================== */
/*  Profile header (cover + info card)                                       */
/* ========================================================================== */

const ProfileHeader: React.FC = () => (
  <div className="mb-6">
    <div className="relative h-40 w-full overflow-hidden rounded-t-2xl sm:h-56">
      <img src={PROFILE.cover} alt="Cover" className="h-full w-full object-cover" />
    </div>
    <div className="relative mx-3 -mt-10 flex flex-col gap-5 rounded-2xl bg-white p-4 shadow-sm sm:mx-5 sm:-mt-12 sm:flex-row sm:items-center sm:p-6">
      <div className="flex items-center gap-4">
        <div className="ring-4 ring-white rounded-2xl">
          <Avatar name={PROFILE.name} size={80} rounded="xl" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-800 sm:text-xl">{PROFILE.name}</h1>
          <p className="text-[12.5px] text-gray-400">{PROFILE.title}</p>
          <div className="mt-1.5 flex items-center gap-2 text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaFacebook className="h-3.5 w-3.5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400">
              <FaTwitter className="h-3.5 w-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-3 sm:ml-auto sm:max-w-md">
        <InfoField icon={<Mail className="h-3.5 w-3.5" />} label="Email" value={PROFILE.email} />
        <InfoField icon={<Cake className="h-3.5 w-3.5" />} label="Birthday" value={PROFILE.birthday} />
        <InfoField icon={<Phone className="h-3.5 w-3.5" />} label="Phone" value={PROFILE.phone} />
        <InfoField icon={<MapPin className="h-3.5 w-3.5" />} label="Location" value={PROFILE.location} />
      </div>
    </div>
  </div>
);

const InfoField: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-[10px] font-medium uppercase tracking-wide text-gray-300">{label}</p>
    <p className="mt-0.5 text-[12.5px] text-gray-600">{value}</p>
  </div>
);

/* ========================================================================== */
/*  Friends + Photos sidebar                                                  */
/* ========================================================================== */

const FriendsCard: React.FC<{ onSelect: (f: Friend) => void }> = ({ onSelect }) => (
  <div className="mb-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
    <h3 className="mb-3 text-sm font-semibold text-gray-800">Friends</h3>
    <div className="space-y-3">
      {FRIENDS.map((f) => (
        <button key={f.id} onClick={() => onSelect(f)} className="flex w-full items-center gap-2.5 rounded-lg text-left hover:bg-gray-50">
          <Avatar name={f.name} size={32} />
          <div className="min-w-0">
            <p className="truncate text-[12.5px] text-gray-700">{f.name}</p>
            <p className="truncate text-[10.5px] text-gray-400">{f.role}</p>
          </div>
        </button>
      ))}
    </div>
  </div>
);

const PhotosCard: React.FC<{ onSelect: (gradient: string) => void }> = ({ onSelect }) => (
  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
    <h3 className="mb-3 text-sm font-semibold text-gray-800">Photos</h3>
    <div className="grid grid-cols-3 gap-2">
      {PHOTO_TILES.map((g, i) => (
        <button key={i} onClick={() => onSelect(g)} className="aspect-square rounded-lg transition-transform hover:scale-95" style={{ background: g }} />
      ))}
    </div>
  </div>
);

/* ========================================================================== */
/*  Composer                                                                  */
/* ========================================================================== */

const Composer: React.FC<{ onPost: (text: string, imageUrl?: string) => void }> = ({ onPost }) => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const [emojiOpen, setEmojiOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const canPost = text.trim().length > 0 || !!imageUrl;

  const handlePost = () => {
    if (!canPost) return;
    onPost(text.trim(), imageUrl);
    setText("");
    setImageUrl(undefined);
  };

  return (
    <div className="mb-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <Avatar name={PROFILE.name} size={36} />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write something..."
          rows={1}
          className="min-h-[36px] flex-1 resize-none border-none py-1.5 text-[12.5px] text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      {imageUrl && (
        <div className="relative mt-3 ml-12 w-40 overflow-hidden rounded-lg border border-gray-100">
          <img src={imageUrl} alt="attachment" className="h-24 w-full object-cover" />
          <button onClick={() => setImageUrl(undefined)} className="absolute right-1 top-1 rounded-full bg-black/50 p-1 text-white hover:bg-black/70">
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      <div className="mt-3 flex items-center justify-between">
        <button
          onClick={handlePost}
          disabled={!canPost}
          className="rounded-lg bg-emerald-500 px-6 py-2 text-xs font-semibold text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Post
        </button>
        <div className="relative flex items-center gap-3 text-gray-300">
          <button onClick={() => fileRef.current?.click()} className="hover:text-gray-500">
            <Paperclip className="h-4 w-4" />
          </button>
          <button onClick={() => setEmojiOpen((s) => !s)} className="hover:text-gray-500">
            <Smile className="h-4 w-4" />
          </button>
          {emojiOpen && (
            <EmojiPopover
              onClose={() => setEmojiOpen(false)}
              onSelect={(e) => {
                setText((t) => t + e);
                setEmojiOpen(false);
              }}
            />
          )}
          <button onClick={() => fileRef.current?.click()} className="hover:text-gray-500">
            <ImageIcon className="h-4 w-4" />
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setImageUrl(URL.createObjectURL(file));
              e.target.value = "";
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Comment item (with one level of replies)                                  */
/* ========================================================================== */

const CommentItem: React.FC<{
  comment: Comment;
  depth?: number;
  onLike: (id: string) => void;
  onReply: (id: string, text: string) => void;
}> = ({ comment, depth = 0, onLike, onReply }) => {
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const submitReply = () => {
    if (!replyText.trim()) return;
    onReply(comment.id, replyText.trim());
    setReplyText("");
    setReplying(false);
  };

  return (
    <div className={depth > 0 ? "ml-10 mt-3" : "mt-4"}>
      <div className="flex items-start gap-2.5">
        <Avatar name={comment.author} size={28} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-[12px] font-semibold text-gray-700">{comment.author}</p>
            <span className="text-[10.5px] text-gray-300">{comment.time}</span>
          </div>
          <p className="mt-0.5 text-[12px] leading-relaxed text-gray-600">{comment.text}</p>
          <div className="mt-1 flex items-center gap-3">
            <button onClick={() => onLike(comment.id)} className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-red-400">
              <Heart className={`h-3 w-3 ${comment.liked ? "fill-red-400 text-red-400" : ""}`} />
              {comment.likes > 0 && comment.likes}
            </button>
            {depth === 0 && (
              <button onClick={() => setReplying((s) => !s)} className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-600">
                <CornerDownRight className="h-3 w-3" /> Reply
              </button>
            )}
          </div>

          {replying && (
            <div className="mt-2 flex items-center gap-2">
              <input
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitReply()}
                placeholder={`Reply to ${comment.author}...`}
                autoFocus
                className="flex-1 rounded-lg border border-gray-200 px-3 py-1.5 text-[11.5px] outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button onClick={submitReply} className="text-emerald-500 hover:text-emerald-600">
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {comment.replies.map((r) => (
        <CommentItem key={r.id} comment={r} depth={depth + 1} onLike={onLike} onReply={onReply} />
      ))}
    </div>
  );
};

/* ========================================================================== */
/*  Post card                                                                 */
/* ========================================================================== */

const PostCard: React.FC<{ post: Post; onUpdate: (post: Post) => void }> = ({ post, onUpdate }) => {
  const [commentText, setCommentText] = useState("");
  const [playing, setPlaying] = useState(false);

  const toggleLike = () => onUpdate({ ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 });

  const updateCommentTree = (comments: Comment[], id: string, fn: (c: Comment) => Comment): Comment[] =>
    comments.map((c) => (c.id === id ? fn(c) : { ...c, replies: updateCommentTree(c.replies, id, fn) }));

  const likeComment = (id: string) =>
    onUpdate({
      ...post,
      comments: updateCommentTree(post.comments, id, (c) => ({ ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 })),
    });

  const replyToComment = (id: string, text: string) => {
    const reply: Comment = { id: uid("cmt"), author: "You", time: "Just now", text, likes: 0, liked: false, replies: [] };
    onUpdate({ ...post, comments: updateCommentTree(post.comments, id, (c) => ({ ...c, replies: [...c.replies, reply] })) });
  };

  const submitComment = () => {
    if (!commentText.trim()) return;
    const newComment: Comment = { id: uid("cmt"), author: "You", time: "Just now", text: commentText.trim(), likes: 0, liked: false, replies: [] };
    onUpdate({ ...post, comments: [...post.comments, newComment] });
    setCommentText("");
  };

  const totalComments = useMemo(() => {
    const count = (list: Comment[]): number => list.reduce((sum, c) => sum + 1 + count(c.replies), 0);
    return count(post.comments);
  }, [post.comments]);

  return (
    <div className="mb-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center gap-2.5">
        <Avatar name={post.author} size={36} />
        <div>
          <p className="text-[12.5px] font-semibold text-gray-800">{post.author}</p>
          <p className="text-[10.5px] text-gray-400">{post.date}</p>
        </div>
      </div>

      <div className="relative mb-3 overflow-hidden rounded-xl">
        <img src={post.mediaUrl} alt={post.caption} className="h-56 w-full object-cover sm:h-72" />
        {post.mediaType === "video" && (
          <button
            onClick={() => setPlaying((p) => !p)}
            className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 shadow-lg">
              {playing ? <Pause className="h-6 w-6 text-gray-700" /> : <Play className="h-6 w-6 text-gray-700" />}
            </span>
          </button>
        )}
      </div>

      <p className="mb-3 text-[12.5px] leading-relaxed text-gray-600">{post.caption}</p>

      <div className="mb-3 flex items-center gap-4 border-b border-gray-50 pb-3">
        <button onClick={toggleLike} className="flex items-center gap-1.5 text-[12px] text-gray-500 hover:text-red-400">
          <Heart className={`h-4 w-4 ${post.liked ? "fill-red-400 text-red-400" : ""}`} />
          {post.likes}
        </button>
        <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
          <MessageCircle className="h-4 w-4" />
          {totalComments}
        </span>
      </div>

      <div className="mb-1 flex items-center gap-2">
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submitComment()}
          placeholder="Write a comment..."
          className="flex-1 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-[12px] outline-none focus:ring-2 focus:ring-emerald-300"
        />
        <button onClick={() => setCommentText((t) => t + "🙂")} className="text-gray-300 hover:text-gray-500">
          <Smile className="h-4 w-4" />
        </button>
        <button onClick={submitComment} className="text-emerald-500 hover:text-emerald-600">
          <Send className="h-4 w-4" />
        </button>
      </div>

      {post.comments.map((c) => (
        <CommentItem key={c.id} comment={c} onLike={likeComment} onReply={replyToComment} />
      ))}
    </div>
  );
};

/* ========================================================================== */
/*  Lightbox                                                                  */
/* ========================================================================== */

const Lightbox: React.FC<{ gradient: string; onClose: () => void }> = ({ gradient, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
    <div onClick={onClose} className="fixed inset-0 bg-black/60" />
    <div className="relative h-72 w-72 rounded-2xl shadow-2xl sm:h-96 sm:w-96" style={{ background: gradient }}>
      <button onClick={onClose} className="absolute -right-3 -top-3 rounded-full bg-white p-1.5 text-gray-600 shadow-lg hover:bg-gray-50">
        <X className="h-4 w-4" />
      </button>
    </div>
  </div>
);

/* ========================================================================== */
/*  Toast                                                                     */
/* ========================================================================== */

/* ========================================================================== */
/*  Main component                                                            */
/* ========================================================================== */

const ProfileScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(SEED_POSTS);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2000);
  };

  const updatePost = (updated: Post) => setPosts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));

  const handleNewPost = (text: string, imageUrl?: string) => {
    const newPost: Post = {
      id: uid("post"),
      author: PROFILE.name,
      date: "Just now",
      mediaType: "image",
      mediaUrl: imageUrl ?? "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      caption: text || " ",
      likes: 0,
      liked: false,
      comments: [],
    };
    setPosts((prev) => [newPost, ...prev]);
    showToast("Post published");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 px-3 py-5 font-sans text-gray-800 sm:px-6 lg:px-10">
      {toast && (
        <div className="fixed left-1/2 top-4 z-[70] -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-medium text-white shadow-lg">
          {toast}
        </div>
      )}

      <div className="mx-auto max-w-5xl">
        <ProfileHeader />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[260px_1fr]">
          <div className="order-1">
            <FriendsCard onSelect={(f) => showToast(`Viewing ${f.name}'s profile`)} />
            <PhotosCard onSelect={setLightbox} />
          </div>

          <div className="order-2 min-w-0">
            <Composer onPost={handleNewPost} />
            {posts.map((p) => (
              <PostCard key={p.id} post={p} onUpdate={updatePost} />
            ))}
          </div>
        </div>
      </div>

      {lightbox && <Lightbox gradient={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
};

export default ProfileScreen;
