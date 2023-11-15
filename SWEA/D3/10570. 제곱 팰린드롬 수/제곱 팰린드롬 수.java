import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	static boolean result;
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		int T = Integer.parseInt(br.readLine());
		
		for(int tc=1;tc<=T;tc++) {
			st = new StringTokenizer(br.readLine());
			int A = Integer.parseInt(st.nextToken());
			int B = Integer.parseInt(st.nextToken());
			
			int cnt = 0;

			for(int i=A;i<=B;i++) {
				boolean resultA = Reverse(String.valueOf(i));
				if(resultA) {
					double sqrtN = Math.sqrt(i);
					boolean resultB = false;
					if(sqrtN == Math.floor(sqrtN)) {
						resultB = Reverse(String.valueOf((int)(Math.sqrt(i))));											
					}
					if(resultA && resultB) {
						cnt++;
					}
				}
			}
			sb.append("#"+tc+" "+cnt+"\n");
		}
		System.out.print(sb);
	}
	public static boolean Reverse(String before) {
		String after = "";
		
		for(int i=before.length() - 1; i >= 0; i--) {
			after += before.charAt(i);
		}
		
		if(after.equals(before)) {
			result = true;
		}else {
			result = false;
		}
//		System.out.println("before : "+before+" after : "+after+" result : "+result);
		return result;
	}
}
