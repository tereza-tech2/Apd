import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hijldsgegywklwwrqson.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhpamxkc2dlZ3l3a2x3d3Jxc29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc1NDI5NTAsImV4cCI6MTk4MzExODk1MH0.EAAliJ4WXWjahuSmH7RE4q98gMPaz8_JNpfusfqk6uo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)